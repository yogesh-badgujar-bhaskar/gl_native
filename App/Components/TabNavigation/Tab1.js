import React , {Component} from 'react';
import {ScrollView, View , FlatList} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import SwipeToDelete from 'react-swipe-to-delete-component';

export default class Tab1 extends Component{
  
  render(){
    return(
        <ScrollView> 

      <View style={{alignItems : 'center'}}>
        
        <Card style={{width : '90%' , marginTop : 20}} >
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Update</Button>
        <Button>Delete</Button>
        </Card.Actions>
        </Card>

        <Card style={{width : '90%' , marginTop : 20}} >
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Update</Button>
        <Button>Delete</Button>
        </Card.Actions>
        </Card>

        <Card style={{width : '90%' , marginTop : 20}} >
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Update</Button>
        <Button>Delete</Button>
        </Card.Actions>
        </Card>

      
      </View>
      </ScrollView>

    )
  }
}
