import React from 'react'
import {Button}  from "react-bootstrap"
import "../styles/NotFound.css";
import {useNavigate} from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <div>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div>
                            <div>
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>


                                </div>

                                <div class="contant_box_404 text-center">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Button variant='warning' onClick={()=>{
                                        navigate("/home")
                                    }} class="link_404">Go to Home</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
