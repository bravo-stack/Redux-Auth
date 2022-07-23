import styled from "styled-components";

export const HomeLayout = styled.div`
        display: flex;
        margin: auto;
        width: 80%;
        height: 100vh;
        justify-content: center;
        align-items: center;

        & .cont {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;   
            width: 50%;
            padding: 3rem 0;   
            border-radius: 5px;
            box-shadow: .15rem .15rem .4rem rgba(0,0,0,.25);  

            & .text {
                font-size: 5rem;
                font-weight: 500;
            }
    
            & .container {
                display: flex;
                gap: 2rem;
                width: 10rem;
    
                & button {
                    border: 1px solid black;
                    border-radius: 5px;
                    padding: 1rem;
                    width: 100%;
                    height: 4rem;
                    font-size: 24px;
                    color: white;
                    background: black;
                    transition: all .2s ease-in-out;
    
                    &:hover {
                        opacity: .8;
                    }
    
                    &:active {
                        opacity: .4;
                    }
                }
            }

            & .login-btn {
                border: 1px solid;
                border-radius: 5px;
                padding: 1rem;
                width: 10rem;
                height: 4rem;
                font-size: 20px;
                background: green;
                border 1px solid green;
                color: white;
                transition: all .2s ease-in-out;

                &:hover {
                    background: green;
                    opacity: .4;
                }

                &:active {
                    background: green;
                    opacity: .8;
                    color: white
                }
            }

            & .logout-btn {
                border: 1px solid;
                border-radius: 5px;
                padding: 1rem;
                width: 10rem;
                height: 4rem;
                font-size: 20px;
                background: orange;
                border 1px solid orange;
                color: white;
                transition: all .2s ease-in-out;

                &:hover {
                    background: yellow;
                    opacity: .4;
                }

                &:active {
                    background: yellow;
                    opacity: .8;
                    color: white
                }
            }
    
            & .reset-btn {
                border: 1px solid;
                border-radius: 5px;
                padding: 1rem;
                width: 10rem;
                height: 4rem;
                font-size: 20px;
                background: white;
                border 1px solid tomato;
                color: tomato;
                transition: all .2s ease-in-out;

                &:hover {
                    background: tomato;
                    opacity: .4;
                    color: white
                }

                &:active {
                    background: tomato;
                    opacity: .8;
                    color: white
                }
            }
        }
`;