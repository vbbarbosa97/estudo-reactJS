import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Loading, Owner, IssueList } from './styles'; //arquivo de estilo
import Container from '../../components/Container';

//o match permite acessar uma propriedade passada na url

export default class Repository extends Component {
    //validando as props
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };
   
    state = {
        repository: {},
        issues: [],
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);
        
        //Promisse vai fazer as duas chamadas na api ao mesmo tempo
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`,{
                //passando wheres para serem trazidos na chamada
                params: {
                    state: 'open',
                    per_page: 5,
                },
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });
    };

    render(){
        const {repository, issues, loading} = this.state;

        if(loading){
            return (
                <>
                    <Loading>
                        Caregando
                        <FaSpinner color="#fff" size={30} />
                    </Loading>
                </>
            );   
        };

        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositórios</Link>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>

                <IssueList>
                    {issues.map(issue =>(
                        <li key={String(issue.id)}> 
                            <img src={issue.user.avatar_url} alt={issue.user.login} />
                            <div>
                                <strong>
                                    <a href={issue.html_url} >{issue.title}</a>
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssueList>
            </Container>
        );
    };
};