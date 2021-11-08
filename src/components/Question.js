import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import { questionGeek } from '../Questionario';
import { ButtonStyle, DivForm, RadioStyle, Titulo, FormStyle } from '../styles/CardQuestion';

export default class Question extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numberQuestion :0,
            question: {
                question:"",
                a:"",
                b:"",
                c:"",
                d:"",
                correct:""

            },
            score:0,
            answerSelect: ""
        }
    }

    componentDidMount() { 
        const currentQuizData = questionGeek[this.state.numberQuestion]

        this.setState({
            question: {
                question:currentQuizData.question,
                a:currentQuizData.a,
                b:currentQuizData.b,
                c:currentQuizData.c,
                d:currentQuizData.d,
                correct:currentQuizData.correct

            }
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if (this.state.numberQuestion < questionGeek.length) {
            this.componentDidMount()
        } else {
            console.log(this.state.score);
        }
    }


    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }
    
    render() {
        return (
            <DivForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="control_id" style={{padding:"4rem"
                }}>
                        <Titulo>{this.state.question.question}</Titulo>
                        <RadioStyle
                            type="radio"
                            value={this.state.question.a}
                            label={this.state.question.a}
                            name={`respuestas`}
                            id={this.state.question.a}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            value={this.state.question.b}
                            label={this.state.question.b}
                            name={`respuestas`}
                            id={this.state.question.b}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            value={this.state.question.c}
                            label={this.state.question.c}   
                            name={`respuestas`}
                            id={this.state.question.c}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            value={this.state.question.d}
                            label={this.state.question.d}
                            name={`respuestas`}
                            id={this.state.question.d}
                            onChange={this.onChanged}
                        />
                        <ButtonStyle variant="primary" type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                            Enviar
                        </ButtonStyle>
                        <h2 style={{ textAlign: "center" }}>{this.state.score}/{questionGeek.length} </h2>
                    </Form.Group>
                </FormStyle>
            </DivForm>
        )
    }
}
