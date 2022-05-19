function nomefunction(){
  const necessario= $("button");
  const caixaPrincipal = $("doisel")
necessario.on("click", function(){
  $(this).data('clicked', true);
  if(necessario.data('clicked')) {
  const data= $("#istrue").val();
 const url= "https://api.nasa.gov/planetary/apod?api_key=QhO49Q7ImWWJHhb4ycrhKP6eohheNhe4vBJfP58J&date="+data;
 $.ajax({
   url: url,
    type: "get",
      dataType: "json",
        success:function(datos){
          const end= (datos.hdurl);
          const imagem= $(".imagem").attr("src",end);
          const divp= $("#conteudo-recebido")
          const descricao= (datos.explanation);
          const texto= $("#caixinha").text(descricao);
           caixaPrincipal.html(imagem);
            }
             
});}    
});}
function imagemDia(){
  $.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT`,
    type: 'GET',
    success: function(fotoDia){
        console.log(fotoDia)
        $('#caixinha').text(fotoDia.explanation)
        $('.imagem').attr('src', fotoDia.url)
       
    }});}
$(function(){
  imagemDia()
  nomefunction()
});