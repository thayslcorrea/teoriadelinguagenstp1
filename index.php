<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Teoria de Linguagens</title>
</head>

<body style="width: 100%;">
    <div class="flex-md-row align-items-center px-md-4 mb-3 bg-white border-bottom shadow-sm" style=" display: flex;">
        <h5><img src="imgs/ufsj.png" style="width: 200px; padding: 5%;" alt="Mais Controle"></h5>
        <div style="width: 100%;">
            <nav class="nav justify-content-end">
                <b>Trabalho Prático I - Teoria de Linguagens</b>
            </nav>
            <nav class="nav justify-content-end">
                <b>Thays L. Corrêa</b>
            </nav>
        </div>
    </div>

    <div class="container d-flex" style="float: left; width: 40%; margin-left: 3%;">
        <div class="card mt-4" style="width: 95%;">
            <div class="card-header text-center">
                <h4>Palavras Processadas</h4>
            </div>

            <div class="card-body">
                <div class="form-group d-flex">
                    <div class=" col-md-8">
                        <input class="form-control input-search" type="text" id="palavra" placeholder="Digite uma palavra" /><br>

                        <input type="file" id="arquivo" name="arquivo" accept=".txt">
                    </div>

                    <div class="col-md-4 text-right">
                        <button type="submit" class="btn btn-lg btn-confirmar">
                            <span style="font: normal normal 600 15px/20px Segoe UI;letter-spacing: 0.85px;color: #FFFFFF;">
                                Verificar
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group col-md-12" style="max-height: 580; overflow-y: auto;">
                    <table class="table table-bordered table-palavras">
                        <thead>
                            <th style="text-align: center;">Palavra</th>
                            <th style="text-align: center;" colspan="2">Status</th>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="float: right; width: 54%; margin-right: 3%; margin-bottom: 5%;">
        <div class="card mt-4" style="width: 100%;">
            <div class="card-header text-center">
                <h4>Autômatos</h4>
                <!-- <h4>ER = 5(0t + 4h)+7</h4> -->
            </div>

            <div class="card-body">
                <h3>AFNε:</h3>
                <img src="imgs/AFNe.jpg" />

                <h3>AFN:</h3>
                <img src="imgs/AFN.png" height="180"/>

                <h3>AFD:</h3>
                <img src="imgs/AFD2.png" height="160" />
            </div>
        </div>
    </div>

</body>


<!-- Importando o jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<!-- Importando o js do bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script src="script.js"></script>

</html>
