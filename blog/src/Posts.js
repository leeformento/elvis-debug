import React from 'react'

import styled from 'styled-components';

let PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: gray;
  color: black;
  justify-content: space-around;
  padding-bottom: 50px;
`;

let PostContainer = styled.div`
  border: dashed gold;
  width: 27.5%;
  height: auto;
  margin-top: 50px;
`;

let TitleContainer = styled.h1`
  color: gold;
  width: 100%;
  margin-top: 0px;
  margin-bottom: -50px;
`;

let GuessButton = styled.button`
  color: black;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid gold;
  background-color: white;
  padding: 14px 28px;
  font-size: 12px;
  cursor: pointer;
`;

const Posts = props => {
    return (
       <div className="App">
        <PostsContainer>
          <TitleContainer>
            <h1>Guess the LOTR Character</h1>
          </TitleContainer>
          {props.posts.map(post => {
            return (
              <PostContainer key={post.id} text={post.text}>
                {/* <p>{post.title}</p> */}
                <GuessButton> {post.text}</GuessButton>
              </PostContainer>
            );
          })}
        </PostsContainer>
      </div>
    );
  }

 export default Posts;