import {gql, useLazyQuery} from "@apollo/client";
import React, {useState} from "react";
import ResultCard from "./components/ResultCard";
import Nav from "./components/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import ClearButton from "./components/ClearButton";

import "./App.css";

export const GITHUB_REPOS = gql`
    query findTopRepos($queryString: String!) {
        search(first: 5, query: $queryString, type: REPOSITORY) {
            repositoryCount
            nodes {
                ... on Repository {
                    nameWithOwner
                    createdAt
                    description
                    stargazerCount
                    forkCount
                    name
                    homepageUrl
                    owner {
                        url
                        login
                        avatarUrl(size: 20)
                    }
                    url
                }
            }
        }
    }
`;

export function App() {
    const [query, setQuery] = useState("");

    const [getRepos, {loading, error, data}] = useLazyQuery(GITHUB_REPOS);

    if (error) return `Error! ${error.message}`;

    return (
        <React.Fragment>
            <Nav/>
            <div className="mainDiv">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        getRepos({
                            variables: {queryString: "user:" + query + " sort:stars"},
                        });
                    }}
                    className="searchBar"
                >
                    <div className="inputField">
                        <button className="searchIcon">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                        <input
                            id="myInput"
                            type="text"
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            placeholder="Search Github repos here"
                        />
                    </div>
                    <ClearButton
                        loading={loading}
                        onClick={() => {
                            document.getElementById("myInput").value = "";
                            getRepos({
                                variables: {queryString: "user:" + "" + " sort:stars"},
                            });
                        }}
                    />
                </form>

                <div className="results">
                    {data?.search?.nodes.map((result, index) => {
                        return (
                            <div
                                className="cardsDiv"
                                id={`${index} ${result.name}`}
                                key={`${index} ${result.name}`}
                            >
                                <ResultCard
                                    name={result.nameWithOwner}
                                    count={result.stargazerCount}
                                    description={result.description}
                                    avatar={result.owner.avatarUrl}
                                    repoURL={result.url}
                                    createdAt={result.createdAt}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
