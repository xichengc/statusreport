$(function(){
  var btns = [
        ['formatting'],
        'btnGrp-semantic',
        ['link'],
        'btnGrp-justify',
        'btnGrp-lists',
        ['horizontalRule'],
        ['removeformat'],
        ['viewHTML']
    ];
  $('#done-textarea').trumbowyg({
    btns: btns
  });
  $('#todo-textarea').trumbowyg({
    btns: btns
  });

  $('#save-btn').click(function(){
    $('#todo-input').val($('#todo-textarea').trumbowyg('html'))
    $('#done-input').val($('#done-textarea').trumbowyg('html'))
    if ($('#projects-input').length >0){
      $('#projects-input').val($('.projects-checkbox :checked').map(function(){return $(this).val();}).get().join());
    }
    $('form').submit();
  });

  $('#draft-btn').click(function(){
    $('#todo-input').val($('#todo-textarea').trumbowyg('html'))
    $('#done-input').val($('#done-textarea').trumbowyg('html'))
    $('#draft-input').val('True');
    $('form').submit();
  });
})
