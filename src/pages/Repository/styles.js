import styled, {keyframes} from 'styled-components';

//Animação do spinner
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    svg {
        margin-top: 15px;
        animation: ${rotate} 2s linear infinite;
    }
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
        color: #7159c1; 
        font-size: 16px;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        max-width: 400px;
        text-align: center;
        color: #666;
        line-height: 1.4;
    }
`;

export const IssueList = styled.div`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;

            strong {
                font-size: 16px;

                a {
                    text-decoration: none;
                    color: #333;

                    &:hover {
                        color: #7159c1;
                    }
                }
            }

            p {
                margin-top: 5px;
                color: #999;
                font-size: 12px;
            }
        }
    }
`;