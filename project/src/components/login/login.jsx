import React from 'react'
import './login.css'

const login = () => {
  return (
    <>
      <div class="container2">
            <div class="kiri">
                <div>
                </div>
                <p>Sign In With</p>
                <div class="sosmed">
                    <a href="#"><img src="../images/FB.png" alt="FB" /></a>
                    <a href="#"><img src="../images/G+.png" alt="G+" /></a>
                </div>
            </div>
            <div class="kanan">
                <div class="nav">
                    <a href="#" class="sign">Sign In</a>
                </div>
                <form class="box">
                    <h1 class="text1">Sign In</h1>
                    <div class="wrap validate">
                        <span>Email</span>
                        <input type="email" class="col-1" placeholder="Enter Your email" />
                    </div>
                    <div class="wrap validate">
                        <span>Password</span>
                        <input type="password" class="col-1" placeholder="Enter Your Password" />
                    </div>
                    <input type="checkbox" placeholder="" /><label for="">Remember me</label>
                    <div class="btn"> 
                        <div class="btn-login">
                            <div class="btn-login1"></div>
                            <button class="form-login">Sign In</button>
                        </div>
                        <a href="htmlregister.html">Belum Punya akun? Daftar Sekarang</a>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default login