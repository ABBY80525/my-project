<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <fieldset class="form-section personal-info">
          <legend>個人資訊</legend>
          <div class="field">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name">
          </div>
          <div class="field">
            <label for="nickname">Nick name:</label>
            <input type="text" id="nickname" v-model="form.nickname">
          </div>
          <div class="field">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email">
          </div>
        </fieldset>
  <div class="flex">
        <fieldset class="form-section address-infon">
          <legend>詳細地址</legend>
          <div class="field">
            <label for="adresse">Adresse:</label>
            <input type="text" id="adresse" v-model="form.adresse">
          </div>
          <div class="field">
            <label for="ville">Ville:</label>
            <input type="text" id="ville" v-model="form.ville">
          </div>
          <div class="field">
            <label for="codePostal">Code Postal:</label>
            <input type="text" id="codePostal" v-model="form.codePostal">
          </div>
        </fieldset>
  
        <fieldset class="form-section order-info">
          <legend>訂單資訊</legend>
          <div class="field">
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="form.date">
          </div>
          <div class="field">
            <label for="number">Number:</label>
            <input type="text" id="number" v-model="form.number">
          </div>
        </fieldset>
    </div>
        <button type="submit" class="submit-btn">送出表單</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          nickname: '',
          email: '',
          adresse: '',
          ville: '',
          codePostal: '',
          date: '',
          number: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.form);
      }
    }
  };
  </script>
  
  <style>
.form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;
}

.form-section {
    border: 2px solid rgb(0, 126, 255);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  .form-section legend {
    padding: 4px 10px;
    font-weight: bold;
    background-color: rgb(0, 126, 255);
    border-radius: 5px;
    color: #fff;
  }
  .field {
    margin-bottom: 10px;
  }
  .field label {
    display: block;
    margin-bottom: 5px;
  }
  .field input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
.flex{
    display: flex;
    justify-content: space-between;
}
  .address-infon,.order-info{
    width: 40%;
  }
  .submit-btn {
    padding: 10px 20px;
    background-color: rgb(0, 126, 255);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: .5s;
  }
  .submit-btn:hover {
    background-color: rgb(77 165 255);
  }
  </style>