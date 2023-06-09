<script  >
    import { enhance } from '$app/forms';
export let data
export let form
    $: ({articles } = data)

    $: Article = {}


</script>
    
    <div class="container text-center mt-5">
        <div class="row">
          <div class="col gap-2">
           
            {#each articles as article}
                <div class="card mt-2 py-2">
                 
                    <form action="?/deleteArticle" method="post" id="deleteID" use:enhance></form>
                    <div class="card-body">
                        <h5 class="card-title">{article.title}</h5>
                        <p class="card-text">{article.content}</p>
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary outilined" on:click={() => Article = article }>Edit</button>
                        <button type="submit" form="deleteID" name="id" value={article.id} class="btn btn-danger">Delete</button>
                        
                      </div>
                        
                </div>
            {/each}

          </div>
          <div class="col">
            {#if form?.success}
                <!-- this message is ephemeral; it exists because the page was rendered in
                    response to a form submission. it will vanish if the user reloads -->
                <p>Successfully logged in! Welcome back </p>
            {/if}
            <form  action="?/createArticle" method="post"  use:enhance>
    
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo" name="title">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="content" ></textarea>
                    
                    
                    <button class="btn btn-primary mt-2">Create</button>
                </div>
                </form>
          </div>
        </div>
      </div>



  
  <!-- Modal -->

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      
        <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{Article?.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form  action="?/updateArticle" method="post"  use:enhance>
        <div class="modal-body">
    
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo" name="title" value={Article?.title}>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="content" value={Article?.content} ></textarea>
                    
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary" name="id" value={Article?.id}  data-bs-dismiss="modal" >Save changes</button>
            </div>
        </form>
      </div>
        
    </div>
  </div>