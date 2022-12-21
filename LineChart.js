google.charts.load('current', {'packages':['corechart'], 'language': 'pt'});
google.charts.setOnLoadCallback(desenharGraficoLinha);
function desenharGraficoLinha() {
    //Mês gastos 
    tabela = new google.visualization.DataTable()
    tabela.addColumn('string', 'Mês');
    tabela.addColumn('number', 'gastos');
    tabela.addRows([
        ['jan', 800],
        ['fev', 400],
        ['mar', 1100],
        ['abr', 400],
        ['mai', 500],
        ['jun', 750],
        ['jul', 1500],
        ['ago', 650],
        ['set', 850],
        ['out', 400],
        ['nov', 1000],
        ['dez', 720]
    ])
    var opcoes = {
        title: 'Gráfico de Linhas',
        legend: 'none', // none = sem legenda
        width: 800,
        height: 300,
        vAxis: {
                format: 'currency', // no eixo Vertical-Y como moeda
                gridlines: {count: 3, // linhas de grade fundo
                            color: 'grey'} // cor das linhas de grade
                            }, 
        curveType: 'function'


    }
    var grafico = new google.visualization.LineChart(
        document.getElementById('graficoLinha'));
        grafico.draw(tabela, opcoes);
}