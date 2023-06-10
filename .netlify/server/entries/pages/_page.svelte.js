import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let articles;
  let Article;
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  ({ articles } = data);
  Article = {};
  return `<div class="container text-center mt-5"><div class="row"><div class="col gap-2">${each(articles, (article) => {
    return `<div class="card mt-2 py-2"><form action="?/deleteArticle" method="post" id="deleteID"></form>
                    <div class="card-body"><h5 class="card-title">${escape(article.title)}</h5>
                        <p class="card-text">${escape(article.content)}</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary outilined">Edit</button>
                        <button type="submit" form="deleteID" name="id"${add_attribute("value", article.id, 0)} class="btn btn-danger">Delete</button></div>
                        
                </div>`;
  })}</div>
          <div class="col">${form?.success ? `
                <p>Successfully logged in! Welcome back </p>` : ``}
            <form action="?/createArticle" method="post"><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo" name="title"></div>
                  <div class="mb-3"><label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="content"></textarea>
                    
                    
                    <button class="btn btn-primary mt-2">Create</button></div></form></div></div></div>



  
  

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">${escape(Article?.title)}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <form action="?/updateArticle" method="post"><div class="modal-body"><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo" name="title"${add_attribute("value", Article?.title, 0)}></div>
                  <div class="mb-3"><label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="content">${escape(Article?.content, false)}</textarea></div></div>
            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" name="id"${add_attribute("value", Article?.id, 0)} data-bs-dismiss="modal">Save changes</button></div></form></div></div></div>`;
});
export {
  Page as default
};
