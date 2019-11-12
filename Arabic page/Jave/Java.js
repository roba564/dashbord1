$(function(){
    function drawChart() {
        var oldData = google.visualization.arrayToDataTable([
          ['Major', 'Degrees'],
          ['Business', 256070], ['Education', 108034],
          ['Social Sciences & History', 127101], ['Health', 81863],
          ['Psychology', 74194]]);
    
        var newData = google.visualization.arrayToDataTable([
          ['Major', 'Degrees'],
          ['Business', 358293], ['Education', 101265],
          ['Social Sciences & History', 172780], ['Health', 129634],
          ['Psychology', 97216]]);
    
        var options = { pieSliceText: 'none' };
    
        var chartBefore = new google.visualization.PieChart(document.getElementById('piechart_before'));
        var chartAfter = new google.visualization.PieChart(document.getElementById('piechart_after'));
        var chartDiff = new google.visualization.PieChart(document.getElementById('piechart_diff'));
    
        chartBefore.draw(oldData, options);
        chartAfter.draw(newData, options);
    
        var diffData = chartDiff.computeDiff(oldData, newData);
        chartDiff.draw(diffData, options);
      }
    
    <span id='piechart_before' style='width: 450px; display: inline-block'></span>
    <span id='piechart_after' style='width: 450px; display: inline-block'></span>
    <br>
    <span id='piechart_diff' style='width: 450px; position: absolute; left: 250px'></span>
    });
    
});
