<template>
  <div>
    <h1>{{user.email}}</h1>
    <h2>{{user.first_name}} {{user.last_name}}</h2>
    <p>Staff: {{user.is_staff}}</p>
    <h3 class="h3 mb-2 mt-3">Delete User</h3>
    <delete-user :id="id"></delete-user>
    <h3 class="h3 mb-2 mt-3">Update User</h3>
    <update-user :id="id"></update-user>
  </div>
</template>

<script>
import axios from '@/axios'
import deleteUser from '@/components/users/delete'
import updateUser from '@/components/users/update'

export default {
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      output: null,
      user: {
        email: '',
        first_name: '',
        last_name: '',
        is_staff: null
      }
    }
  },
  props: ['id'],
  components: {
    'delete-user': deleteUser,
    'update-user': updateUser
  },
  methods: {
    getUser () {
      axios
        .get(`/users/${this.id}/`)
        .then(response => {
          this.output = response
          this.user = response.data
        })
        .catch(error => {
          this.output = error
          this.errored = true
        })
    }
  },
  created () {
    this.getUser()
  }
}
</script>
