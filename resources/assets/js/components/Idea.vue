<template>
    <div id="app">
        <h2 class="text-center">Agregar Tareas</h2>
        <div class="well">
            <h4>Escriba una tarea:</h4>
            <form v-on:submit.prevent="createIdea">
                <div class="input-group">
                    <input type="text" class="form-control input-sm" v-model="newIdea" maxlength="256">
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary btn-sm">
                            Agregar
                        </button>
                    </span>
                </div>         
            </form>
            <hr>
            
            <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarea</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="idea in ideas">
                    <td width="10px">{{ idea.id }}</td>
                    <td>{{ idea.description }}</td>
                    <td v-on:click="prueba">{{ since(idea.created_at) }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep)">Editar</a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteIdea(id)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>    

        </div>
    </div>
</template>

<script>
    import axios  from 'axios'
    import toastr from 'toastr'
    import moment from 'moment'

    moment.lang('es');
    
    export default {
        data () {
            return {
                ideas : [],
                newIdea: '',
            }
        },
        created: function() {
            this.getIdeas();
        },
        methods: {
            since: function(d) {
                return moment(d).fromNow();
            },
            getIdeas: function(page) {
                var urlIdeas = 'mis-ideas';
                axios.get(urlIdeas).then(response => {
                    this.ideas = response.data
                });
            },
            createIdea: function() {
                var url = 'guardar-idea';
                axios.post(url, {
                    description: this.newIdea
                }).then(response => {
                    this.getIdeas();
                    this.newIdea = '';
                    toastr.success('Nueva idea registrada');
                }).catch(error => {
                    toastr.error('Error');
                });
            },
            prueba: function(){
                alert("prueba");
            },

            deleteIdea: function(id) {
                    alert(id);
            var url = 'eliminar-idea' + idea.id;
            axios.delete(url).then(response => { //eliminamos
                this.getIdeas(); //listamos
                toastr.success('Eliminado correctamente'); //mensaje

            });
        }
    }

}

</script>
