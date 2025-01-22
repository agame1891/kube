import React from 'react'
import './register.css'

const register = () => {
  return (
    <>
      <div class="register">
            <div class="left">
                <br />
                <p>Sign In With</p>
                <div class="sosmed">
                    <a href="#fb"><img src="../images/FB.png" /></a>
                    <a href="#google"><img src="../images/G+.png" /></a>
                </div>
            </div>
            <div class="right">
                <nav class="navigate">
                    <a href="#Register" class="regis">Register</a>
                </nav>
                <form action="">
                <div class="regisForm">
                    <h1>Register</h1>
                    <label for="name">FIRST NAME</label>
                    <br />
                    <input type="text" id="name" placeholder="Enter Your First Name" />
                    <br />
                    <label for="name">LAST NAME</label>
                    <br />
                    <input type="text" id="name" placeholder="Enter Your Full Name" />
                    <br />
                    <label for="email">EMAIL</label>
                    <br />
                    <input type="text" id="email" placeholder="Enter Your Email" />
                    <br />
                    <label for="pass">PASSWORD</label>
                    <br />
                    <input type="password" id="pass" placeholder="Enter Your Password" />
                    <br />
                    <label for="pass">CONFIRM PASSWORD</label>
                    <br />
                    <input type="password" id="pass" placeholder="Confirm Your Password" />
                    <br />
                    <input type="checkbox" id="cb" />
                    <label for="cb">I Agree To Terms & Condition</label>
                </div>

                    <button class="button"><span>Register</span></button>
                </form>
            </div>
        </div>
    </>
  )
}

export default register