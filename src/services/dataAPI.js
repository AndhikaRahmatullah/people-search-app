import axios from "axios";

export const fullData = async () => {
	try {
		const response = await axios.get('https://dummyjson.com/users?limit=100&select=firstName,lastName,age,gender');
		return response.data.users;
	} catch (error) {
		alert(error.message);
	}
}

export const detailData = async (id) => {
	try {
		const response = await axios.get(`https://dummyjson.com/users/${id}`);
		return response.data;
	} catch (error) {
		alert(error.message);
	}

}