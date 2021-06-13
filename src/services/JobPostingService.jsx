import axios from "axios";
import React from 'react'

export default class JobPostingService {
    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobpostings/getAllByIsActive")
    }
}