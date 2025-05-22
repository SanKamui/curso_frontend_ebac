$(document).ready(function () {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#nova-tarefa').val().trim();

        if (nomeTarefa !== '') {
            const novaLi = $('<li></li>').text(nomeTarefa);
            $('#lista-tarefas').append(novaLi);
            $('#nova-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
