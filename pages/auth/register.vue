<template>
  <div class="user-modal-container">
    <div class="user-modal">
      <ul class="form-switcher">
        <li>
          <h2 id="login-form">Register </h2>
        </li>
      </ul>
      <div class="form-register">
        <input type="text" name="user" placeholder="Username"
        v-model="user.username">
        <input type="email" name="email" placeholder="Email"
        v-model="user.email">
        <input type="text" name="f_name" placeholder="first name"
        v-model="user.firstName">
        <input type="text" name="l_name" placeholder="last name"
        v-model="user.lastName">
        <input type="password" name="password" placeholder="Password"
        v-model="user.password">
        <input type="date" name="dob" placeholder="dob" v-model="user.dob">
        <input type="password" name="cpassword" placeholder="Password"
        v-model="user.cpassword">
        <input type="submit" @click="register(user)" id="loginSubmit">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
        countryCode: '+91',
        phone: '9840751295'
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    })
  },
  methods: {
    ...mapActions([
      'register'
    ])
  }
}
</script>

<style>
.user-modal-container * {
  box-sizing: border-box;
}

.user-modal-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  overflow-y: auto;
  z-index: 3;
  font-family: 'Lato', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  font-size: 14px;
  -webkit-transition: all 0.25s linear;
  -moz-transition: all 0.25s linear;
  -o-transition: all 0.25s linear;
  -ms-transition: all 0.25s linear;
  transition: all 0.25s linear;
}

.user-modal-container {
  opacity: 1;
  visibility: visible;
}

.user-modal-container .user-modal {
  position: relative;
  margin: 50px auto;
  width: 90%;
  max-width: 500px;
  background-color: #f6f6f6;
  cursor: initial;
}

.user-modal-container .form-login,
.user-modal-container .form-register,
.user-modal-container .form-password {
  padding:0 25px 25px;
  display: none;
}

.user-modal-container .form-login,
.user-modal-container .form-register,
.user-modal-container .form-password {
  display: block;
}

.user-modal-container ul.form-switcher {
  margin: 0;
  padding: 0;
}

.user-modal-container ul.form-switcher li {
  list-style: none;
  display: inline-block;
  width: 100%;
  margin: 0;
}

.user-modal-container ul.form-switcher li h2 {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  color: #666666;
  text-align: center;
}

.user-modal-container ul.form-switcher li h2 {
  color: #000000;
}

.user-modal-container input {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
}

.user-modal-container input[type="submit"] {
  color: #f6f6f6;
  border: 0;
  margin-bottom: 0;
  background-color: #3fb67b;
  cursor: pointer;
}

.user-modal-container input[type="submit"]:hover {
  background-color: #3aa771;
}

.user-modal-container input[type="submit"]:active {
  background-color: #379d6b;
}

.user-modal-container .links {
  text-align: center;
  padding-top: 25px;
}

.user-modal-container .links a {
  color: #3fb67b;
}

.user-modal-container input[type="submit"].disabled {
  background-color: #98d6b7;
}</style>
