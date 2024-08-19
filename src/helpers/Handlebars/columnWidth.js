module.exports = function(target_col, data) {

    var col_widths = [
        data.col_1_width.value,
        data.col_2_width.value,
        data.col_3_width.value
    ];

    var col_num = Number(data.col_num.value);
    target_col = Number(target_col);
    var width = 12;

    // Use width override if available
    var width_override = Number(col_widths[target_col-1]);
    if (width_override > 0) {
        width = width_override;

    // Else loop through columns and accumulate manual width
    } else {

        var width_acc = 0;
        var auto_cols = 0;
        for (var i = 0; i < col_num; i++) {
            var col_width_override = Number(col_widths[i]);
            if (col_width_override > 0) {
                width_acc += col_width_override;
            } else {
                auto_cols++;
            }

        }

        var width_available = 12 - width_acc;
        width = width_available / auto_cols;
    }

    // Return bootstrap column class
    return 'col-xs-12 col-lg-' + width;
};