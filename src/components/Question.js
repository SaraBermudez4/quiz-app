import { Button, FormControl, RadioGroup, Spinner, Stack } from "@chakra-ui/react";
import React, { Component } from "react";
import { questionGames } from "../data/preguntas";
import { ButtonStyled, DivForm, FormStyle, RadioStyled, Titulo } from "../styles/CardQuestion";

export default class Question extends Component {
    constructor() {
        super()
        this.state = {
            numberQuestion: 0,
            question: {
                question: '',
                a: '',
                b: '',
                c: '',
                d: '',
                correct: ''
            },
            score: 0,
            answerSelect: '',
            loader: true
        }
    }

    componentDidMount() {
        this.getCurrentQuizData()
    }

    getCurrentQuizData = () => {
        const currentQuizData = questionGames[this.state.numberQuestion]

        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.correct,
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1
            })
        }
        if (this.state.numberQuestion < questionGames.length) {
            this.setState({
                numberQuestion: this.state.numberQuestion + 1
            })
            this.getCurrentQuizData()
        }
        e.target.reset()
    }

    onChanged = e => {
        this.setState({
            answerSelect: e
        })
    }


    render() {
        return (
            this.state.loader === true
                ?
                <>
                    <Spinner />
                    <Button onClick={() => this.setState({
                        loader: !this.state.loader
                    })}>
                        Show
                    </Button>
                </>
                :
                <>
                    <Button onClick={() => this.setState({
                        loader: !this.state.loader
                    })}></Button>

                    <DivForm>
                        <FormStyle onSubmit={this.handleSubmit}>
                            <FormControl as='fieldset'>
                                <Titulo as='legend'>{this.state.question.question}</Titulo>
                                <RadioGroup
                                    onChange={this.onChanged}
                                    // defaultValue='respuesta1'
                                    style={{ paddingLeft: '30px' }}>
                                    <Stack>
                                        <RadioStyled
                                            value={this.state.question.a}
                                            name="respuesta1"
                                            id={this.state.question.a}

                                        >{this.state.question.a}</RadioStyled>
                                        <RadioStyled
                                            value={this.state.question.b}
                                            name="respuesta2"
                                            id={this.state.question.b}
                                        >{this.state.question.b}</RadioStyled>
                                        <RadioStyled
                                            value={this.state.question.c}
                                            name="respuesta3"
                                            id={this.state.question.c}
                                        >{this.state.question.c}</RadioStyled>
                                        <RadioStyled
                                            value={this.state.question.d}
                                            name="respuesta4"
                                            id={this.state.question.d}
                                        >{this.state.question.d}</RadioStyled>
                                    </Stack>
                                </RadioGroup>
                                <ButtonStyled type="submit"
                                // onClick={() => {
                                //     if (this.state.numberQuestion < questionGames.length) {
                                //         this.setState({
                                //             numberQuestion: this.state.numberQuestion + 1
                                //         })
                                //     }
                                // }}
                                >
                                    Enviar
                                </ButtonStyled>
                                <h2 style={{ textAlign: 'center' }}>{this.state.score}/{questionGames.length}</h2>
                            </FormControl>
                        </FormStyle>
                    </DivForm>
                </>
        );
    }
}