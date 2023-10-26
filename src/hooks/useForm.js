import { useState } from "react";
import axios from '../utils/axios';

export const useForm = (initialForm, endpoint, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify(form),
            };

            const res = await axios(endpoint, options);
            setData(res.data);
            setForm(initialForm)

        } catch (err) {
            setLoading(true)
            setErrors(err.response.data.errors);
        } finally {
            setLoading(false)
        }
    };

    return {
        form,
        data,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};