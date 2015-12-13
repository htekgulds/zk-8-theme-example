/**
    * Created by Hasan TEKGÜL
    * on 13.12.2015.
    */
zk.afterMount(function () {
    zkbind.$('$labelCount').after('doLabelChange', function (evt) {
        jq('#labelCount').text("Count: " + evt);
    });
});