import AsyncStorage from '@react-native-community/async-storage';

export default class AppAsync {
	static async setItem( key, value ) {
		try {
			return await AsyncStorage.setItem( key, JSON.stringify( value ) );
		} catch ( error ) {
			return error;
		}
	}

	static async getItem( key ) {
		let result = await AsyncStorage.getItem( key );
		if ( result ) {
			try {
				result = JSON.parse( result );
			} catch ( e ) {
				return e;
			}
		}

		return result;
	}

	static async removeItem( key ) {
		await AsyncStorage.removeItem( key );
	}
}
