<template>
  <main>
    <h1>Quadro de tarefas</h1>
    <p>Crie uma lista de tarefas</p>

    <div class="create-new">
      <input 
        type="text"
        v-model="newTask"
        placeholder="Adicione uma nova tarefa"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Adicionar</button>

      <div class="tasks">
        <Task 
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      newTask: ''
    }
  },
  methods:{
    addTask(){
      if(this.newTask){
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>
