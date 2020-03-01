import React from 'react';
import { Container, Content, List, ListItem, Icon, Left, Right, Text } from 'native-base';

export default class Goals extends React.Component<{ goals: Array<string> }, {}> {
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.goals.map(element => {
              return (
                <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                  <Left>
                    <Text>{element}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}