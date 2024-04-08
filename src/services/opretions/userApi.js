import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { userEndpoints } from "../apis";

const {
    CREATE_USER_DATA_API,
    SHOW_USER_DETAILS_API
} = userEndpoints;

export const createUser = async (data) => {
    let result = null
    const toastId = toast.loading("Loading...");
    try {
        console.log("Befor backend function call", data);

        const response = await apiConnector("POST", CREATE_USER_DATA_API, data);

        console.log("after backend function call");

        console.log("CREATE_USER_DATA_API RESPONSE......", response)

        if (!response?.data?.success) {
            throw new Error("Could Not Create User")
        }

        result = response?.data?.data
    }
    catch (error) {
        console.log("CREATE_USER_DATA_API Error......", error)
        console.log("Error Message ", error.message);
    }

    toast.dismiss(toastId);
    return result
}

export const getUserDetails = async (Email) => {
    const toastId = toast.loading("Loading...");
    let result = null
    try {
        const response = await apiConnector("POST", SHOW_USER_DETAILS_API, Email);

        console.log("SHOW_USER_DETAILS_API response.....", response);
        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data
    }
    catch (error) {
        console.log("SHOW_USER_DETAILS_API ERROR....", error);
    }

    toast.dismiss(toastId);
    return result
}