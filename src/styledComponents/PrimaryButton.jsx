import React from 'react'
import styled from 'styled-components'
import {BaseButton} from './BaseButton'

const PrimaryButton = styled(BaseButton)`
background-color: ${props => props.variant ==="outline" ? "white" : "#3498db" };
color: ${props => props.variant==="outline" ? "#3498db" : "white"};

&:hover{
  color:red;
}

`;


export {PrimaryButton}