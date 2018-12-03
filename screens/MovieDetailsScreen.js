import React from 'react';
import { Button, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../styles'

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie details',
			tabBarIcon: ({ focused, tintColor }) => {
				return (
					<Ionicons
						name='md-filing' //{`md-film${focused ? "" : "-outline"}`}
						color={tintColor}
						size={25}
					/>)
			}
		};
	};



	render() {
		return (
			<View style={Styles.container}>
				<Text>This is the movie details</Text>
			</View>
		);
	}
}

