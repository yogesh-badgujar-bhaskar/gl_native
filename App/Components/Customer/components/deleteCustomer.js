import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Dialog, Paragraph, Portal, Provider} from 'react-native-paper';
import {DELETEUSERMESSAGE} from '../../../../common/CommonMsg';

export default class deleteCustomer extends Component {
  render() {
    return (
      <>
        <Provider>
          <Portal>
            <Dialog
              visible={this.props.visible}
              onDismiss={this.props.onDismiss}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>{DELETEUSERMESSAGE}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={this.props.cancleButton_onpress}>
                  Cancel
                </Button>
                <Button onPress={this.props.yesButton_onpress}>yes</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </Provider>
      </>
    );
  }
}
