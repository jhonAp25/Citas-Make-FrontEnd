import axios from 'axios'
import React from 'react'

export const Security = 
    axios.create({
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
          }
        }
      )



