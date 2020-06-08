<template>

  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title"><h2> {{ title }}<!--::after--></h2>
        <p>{{ text }}</p></div>
      <div class="row aos-init" data-aos="fade-in">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div v-for="contact in contacts" :class=" contact.class ">
              <i :class=" contact.icon "><!--::before--></i><h4>{{ contact.info }}</h4>
              <p>{{ contact.text }}</p></div>
            <iframe :src=" address " frameborder="0" style="border:0; width: 100%; height: 290px;"
                    allowfullscreen=""></iframe>
          </div>
        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form :action=" forms " method="post" role="form" class="php-email-form">
            <div class="form-row">
              <div v-for="formData in formsData" :class=" formData.class ">
                <label for="name">{{ formData.data }}</label>
                <input :type=" formData.type " class="form-control" :name=" formData.name " :id=" formData.id "
                       :data-rule=" formData.rule " :data-msg=" formData.msg ">
                <div class="validate"></div>
              </div>
            </div>

            <div class="form-group">
              <label for="name">{{ subject.data }}</label>
              <input :type=" subject.type " class="form-control" :name=" subject.name " :id=" subject.id "
                     :data-rule=" subject.rule " :data-msg=" subject.msg ">
              <div class="validate"></div>
            </div>

            <div class="form-group">
              <label for="name">{{ message.data }}</label>
              <textarea class="form-control" :name=" message.name " :rows=" message.rows " :data-rule=" message.rule "
                        :data-msg=" message.msg "></textarea>
              <div class="validate"></div>
            </div>

            <div class="mb-3">
              <div v-for="send in sendInfo" :class=" send.class ">{{ send.text }}</div>
            </div>

            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>

</template>

<script>

    export default {
        name: "contactSection",
        data() {
            return {
                title: 'Contact',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                contacts: [
                    {
                        class: 'address',
                        icon: 'icofont-google-map',
                        info: 'Location:',
                        text: 'A108 Adam Street, New York, NY 535022'
                    },
                    {class: 'email', icon: 'icofont-envelope', info: 'Email:', text: 'info@example.com'},
                    {class: 'phone', icon: 'icofont-phone', info: 'Call:', text: '+1 5589 55488 55'}
                ],
                address: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621',
                forms: '../forms/contact.php',
                formsData: [
                    {
                        class: 'form-group col-md-6',
                        data: 'Your Name',
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        rule: 'minlen:4',
                        msg: 'Please enter at least 4 chars'
                    },
                    {
                        class: 'form-group col-md-6',
                        data: 'Your Email',
                        type: 'email',
                        name: 'email',
                        id: 'email',
                        rule: 'email',
                        msg: 'Please enter a valid email'
                    }
                ],
                subject: {
                    data: 'Subject',
                    type: 'text',
                    name: 'subject',
                    id: 'subject',
                    rule: 'minlen:4',
                    msg: 'Please enter at least 8 chars of subject'
                },
                message: {
                    data: 'Message',
                    name: 'message',
                    rows: 10,
                    rule: 'required',
                    msg: 'Please write something for us'
                },
                sendInfo: [
                    {class: 'loading', text: 'Loading'},
                    {class: 'error-message'},
                    {class: 'sent-message', text: 'Your message has been sent. Thank you!'}
                ]
            }
        }
    }

</script>

<style scoped>

  .contact {
    padding-bottom: 130px;
  }

  .contact .info {
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }

  .contact .info i {
    font-size: 20px;
    color: #149ddd;
    float: left;
    width: 44px;
    height: 44px;
    background: #dff3fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #050d18;
  }

  .contact .info p {
    padding: 0 0 10px 60px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #173b6c;
  }

  .contact .info .email p {
    padding-top: 5px;
  }

  .contact .info .social-links {
    padding-left: 60px;
  }

  .contact .info .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #333;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    margin-right: 10px;
  }

  .contact .info .social-links a:hover {
    background: #149ddd;
    color: #fff;
  }

  .contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
    background: #149ddd;
    color: #fff;
  }

  .contact .php-email-form {
    width: 100%;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }

  .contact .php-email-form .form-group {
    padding-bottom: 8px;
  }

  .contact .php-email-form .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
  }

  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form input, .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input {
    height: 44px;
  }

  .contact .php-email-form textarea {
    padding: 10px 12px;
  }

  .contact .php-email-form button[type="submit"] {
    background: #149ddd;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 4px;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #37b3ed;
  }

  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
