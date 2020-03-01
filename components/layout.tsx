import React from 'react';
import { Container, Content, Button, Text, Input, Item} from 'native-base';
import Goals from './goals'

export default class LayOut extends React.Component<{}, {title: string, goals: Array<string>}> {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          goals: []
        };

        this._onPressButton = this._onPressButton.bind(this)
    }
    _onPressButton(){
      console.log(this.state.goals)
      this.setState({
        goals: [...this.state.goals, this.state.title],
        title: ''
      })
    }
  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input 
            placeholder="Write a goal..." 
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            />
            <Button info onPress={this._onPressButton}><Text> Submit </Text></Button>
          </Item>
          <Goals goals={this.state.goals}/>
        </Content>
      </Container>
    );
  }
}