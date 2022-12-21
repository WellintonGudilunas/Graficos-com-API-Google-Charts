google.charts.load('current', {'packages':['corechart'], 'language': 'pt'});
google.charts.setOnLoadCallback(desenharGraficoLinha);

function desenharGraficoLinha() {
        var tabela = google.visualization.arrayToDataTable( // arrayTo substitui o addColum e addRows
            [
                ['Mês', 'Entrada', 'Saída'],
                ['jan', 2500, 1000],
                ['fev', 2000, 500],
                ['mar', 3000, 1300],
                ['abr', 1500, 1700],
                ['mai', 5000, 2250],
                ['jun', 3567, 3000],
                ['jul', 3452, 1468],
                ['ago', 1833, 5250],
                ['set', 3803, 5500],
                ['out', 1800, 1000],
                ['nov', 3569, 1500],
                ['dez', 3000, 1740]
            ]
        )
        var opcoes = {
            title: 'Gráfico de Colunas',
            height: 300,
            width: 800,
            legend: 'bottom',
            vAxis: {
                format: 'currency',
                gridlines:{
                    count: 3,
                    color:'gray'}, //transparent
                    title: 'Valores'
            },
            hAxis: {
                title: 'Mês'
            }
        }
        var grafico = new google.visualization.ColumnChart(
            document.getElementById('graficoColuna'));
        grafico.draw(tabela, opcoes)

        var tabela2 = new google.visualization.DataTable();
        tabela2.addColumn('string', 'categoria');
        tabela2.addColumn('number', 'valores');
        tabela2.addColumn({type: 'number', role: 'annotation'}); // deixa o valor da coluna encima da barra da coluna
        tabela2.addColumn({type: 'string', role: 'style'}); // mudar a cor do grafico de colunas
        tabela2.addRows([
            ['Educação', 1000, 1000, 'green' ], // tenho que duplica o valor pra ficar "anotado" encima de cada coluna
            ['Transporte', 450, 450, 'yellow'], // adicionar novo atributo de cor
            ['Lazer', 730, 730, 'pinkyellow'], // 2
            ['Saúde', 600, 600, 'brown'],
            ['Cartão de crédito', 900, 900, "#8904D1"],
            ['Alimentação', 560, 560, 'pink']
        ]);
        var opcoes2 = {
            title: 'Gráfico de colunas 2',
            height: 300,
            width: 800,
            legend: 'bottom',
            vAxis: {
                format: 'currency',
                textPosition: 'none', // oculta os valores do lado direito
                gridlines:{
                    count: 0,
                    color: 'gray'
                }
            }
        }
    
        var grafico2 = new google.visualization.ColumnChart(
            document.getElementById('graficoColuna2'));
        grafico2.draw(tabela2, opcoes2);
        
}