$(document).ready(function (){

    $("#delete-root-tag").hide()
    $("#dialog_with_single_option").hide()
    $("#dialog_with_two_option").hide()
    
    
    $("#root-tag").hover(function(){
        $("#delete-root-tag").hide()
    })
    
    total_single_blocks=1;
    condition_block_created=false;

    var q1='add_below_root';
    var q2="add_below_single";
    var q;
    
    $("#d1_add_single_block").click(function(q1){
        if(q1=='add_below_root'){
            $("#root-block").after(
                `<div id="single-block">
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div id="sb-tag" class="flow-tag btn btn-light shadow-lg p-2 bg-white rounded">
                                <div id="delete-sb-tag" class="mini-floating-button position-absolute delete-box">
                                    <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                </div>
                                <span class="position-relative">Block</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div id="open_dialog" class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="floating-button">
                                <div class="material-icons">add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }else if(q1==="add_below_single"){
            $("#single-block:last").after(
                `<div id="single-block">
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div id="sb-tag" class="flow-tag btn btn-light shadow-lg p-2 bg-white rounded">
                                <div id="delete-sb-tag" class="mini-floating-button position-absolute delete-box">
                                    <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                </div>
                                <span class="position-relative">Block</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div id="open_dialog" class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="floating-button">
                                <div class="material-icons">add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }
        $("#delete-sb-tag:last").hide()
        total_single_blocks++;
        $("#dialog_with_single_option").hide()
        $("#dialog_with_two_option").hide()
       
    })

    $("#d2_add_single_block").click(function(q1){
        if(q1=='add_below_root'){
            $("#root-block").after(
                `<div id="single-block">
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div id="sb-tag" class="flow-tag btn btn-light shadow-lg p-2 bg-white rounded">
                                <div id="delete-sb-tag" class="mini-floating-button position-absolute delete-box">
                                    <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                </div>
                                <span class="position-relative">Block</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div id="open_dialog" class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="floating-button">
                                <div class="material-icons">add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }else if(q1=="add_below_single"){
            $("#single-block:last").after(
                `<div id="single-block">
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div id="sb-tag" class="flow-tag btn btn-light shadow-lg p-2 bg-white rounded">
                                <div id="delete-sb-tag" class="mini-floating-button position-absolute delete-box">
                                    <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                </div>
                                <span class="position-relative">Block</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 box-no-margin">
                        <div id="open_dialog" class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                            <div class="floating-button">
                                <div class="material-icons">add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }
        $("#delete-sb-tag:last").hide()
        total_single_blocks++;
        $("#dialog_with_single_option").hide()
        $("#dialog_with_two_option").hide()
    })

    var run_open_dialog_function=function(){
        if($("#open_dialog").parent().parent().parent().attr('id')==="root-block"){
            if(total_single_blocks===1){
                // create new block
                if(!condition_block_created){
                    // open dialog with one option
                    $("#dialog_with_two_option").show()
                    q='add_below_root';
                }else{
                    // open dialog with two option
                    $("#dialog_with_single_option").show()
                }
            }
        }else if($("#open_dialog").parent().parent().parent().attr('id')==="single-block"){
           // create new block
           if(!condition_block_created){
               // open dialog with one option
            
           }else{
               // open dialog with two option
           }
        }
    }
    
    
    
    $("#open_dialog").click(run_open_dialog_function)

    
    
    var d1_asb= function(){
        $("#d-1-add-single-block").after(
           `<div class="center">
           <div class="card">
               <div class="card-body">
                 <h5 class="card-title custom-font">Add new block</h5>
                 <p class="card-text custom-font hor-margin ss">Select the type of block to be added</p>
                 <div>
                   <button class="btn btn-primary btn-margin custom-font">Add single block</a>
                   <button class="btn btn-primary btn-margin custom-font aaa">Add condition block</a>
                 </div>
               </div>
         </div>
       </div>`
        )
    }
    
    });

    /*
<!DOCTYPE html>
<html>
    <head>
        <title>Flowchart</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" type="text/css" href="bootstrap.css">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    </head>
    <body class="body"> 
        <div>
            <h2>Welcome to fun</h2>
        </div>
        <main>
            <div class="container-fluid">
                <div id="root-block">
                    <div class="row">
                        <div class="col-12 box">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div  id="root-tag" class="flow-tag btn btn-light shadow-lg p-2 bg-white rounded">
                                    <div id="delete-root-tag" class="mini-floating-button position-absolute delete-box">
                                        <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                    </div>
                                    <span class="position-relative">Root</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div id="add_single_block" class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="floating-button">
                                    <div class="material-icons">add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="single-block">
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="flow-tag btn btn-light no-hover shadow-lg p-2 bg-white rounded">
                                    <div class="mini-floating-button position-absolute delete-box">
                                        <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                    </div>
                                    <span class="position-relative">Block</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="floating-button">
                                    <div class="material-icons">add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block[]">
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="flow-tag btn btn-light no-hover shadow-lg p-2 bg-white rounded">
                                    <div class="mini-floating-button position-absolute delete-box">
                                        <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                    </div>
                                    <span class="position-relative">Block</span>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="floating-button">
                                    <div class="material-icons">add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="2-block[]">
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="flow-tag btn btn-light no-hover shadow-lg p-2 bg-white rounded">
                                    <div class="mini-floating-button position-absolute delete-box-condition">
                                        <i class="material-icons" style="font-size:10px;color:white;">clear</i>
                                    </div>
                                    <span class="position-relative">Condition</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 box-no-margin">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                <div class="short-vertical-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center  h-100 d-flex no-gutters">
                        <div class="very-short-horizontal-line"></div>
                        <div class="col-lg-2 col-sm-3 box-no-margin no-gutters">
                            <div class="vertical-center justify-content-center align-items-center  h-100 d-flex no-gutters">
                                <div class="horizontal-line"></div>
                            </div>
                        </div>
                        <div class="very-short-horizontal-line"></div>
                    </div>
                    <div class="row justify-content-center h-100 d-flex">
                        <div class="col-lg-2 col-sm-3 box-no-margin">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="short-vertical-line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="floating-button color-green-bg">
                                                <div class="material-icons">thumb_up_alt</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="vertical-line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="floating-button">
                                                <div class="material-icons">add</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-3 box-no-margin">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="short-vertical-line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="floating-button color-red-bg">
                                                <div class="material-icons">thumb_down_alt</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="lll"class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div class="vertical-line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 box-no-margin">
                                        <div class="vertical-center justify-content-center align-items-center  h-100 d-flex">
                                            <div id="add" class="floating-button">
                                                <div class="material-icons">add</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
        <div class="center">
            <input type="checkbox" id="click">
               <label for="click" class="click-me">Click Me</label>
               <div class="content">
                   <div class="header">
                       <h2>Dialog Popup</h2>
                       <label for="click" class="fas fa-times"></label>
                   </div>
                   <label for="click" class="fas fa-check"></label>
                   <p>Write down antything here...................................................</p>
                   <div class="line"></div>
                   <label for="click" class="close-btn">Close</label>
               </div>
        </div>

        

        <script src="script.js"></script>
        <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
    </body>
</html>
    */
