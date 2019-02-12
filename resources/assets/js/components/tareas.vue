<template>
	
    <div class="row">
    	<div class="col-xs-12">
    		<h1 class="page-header">CRUD Laravel</h1>
    	</div>
    	<div class="col-sm-7">
    		<a class="btn btn-primary pull-right" v-on:click.prevent="createIdea">Nueva tarea</a>
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
                alert('hola');
                },
            }
        }
    
</script>