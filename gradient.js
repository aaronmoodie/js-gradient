/*
    
    /////////////////////////////
    Javascript Gradient Generator
    Version 1.1 by Aaron Moodie
    Adapted from http://www.codingforums.com/showthread.php?t=79463
    /////////////////////////////
    
*/

// array containing pairs of colours
var colour_pair = [];

colour_pair[0] = ["0033FF", "534741"];
colour_pair[1] = ["00e4cc", "ed5300"];
colour_pair[2] = ["6fa6b2", "ffc600"];
colour_pair[3] = ["e6a17c", "02c587"];
colour_pair[4] = ["81cf90", "8d075f"];
colour_pair[5] = ["a3cafa", "f0830e"];
colour_pair[6] = ["1ecef4", "824ac1"];
colour_pair[7] = ["00e165", "ee7eb3"];
colour_pair[8] = ["e79b69", "5d7fef"];
colour_pair[9] = ["b0ca03", "9a38ed"];



function hexdec (hex_string) {
    // Returns the decimal equivalent of the hexadecimal number  
    // Original by Philippe Baumann
    hex_string = (hex_string+'').replace(/[^a-f0-9]/gi, '');
    return parseInt(hex_string, 16);
}



function convert_to_hex(num) {
    // Converts numeric value (such as 170) to a hexadecimal string (such as 'AA')
    // Original by Jim Bumgardner
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((num >> 4) & 0x0F,1)) + nybHexString.substr(num & 0x0F,1);
}



function gradient(colour_1, colour_2, increments) {
    // Returns array with length 'increments' as a gradient from 'colour_1' to 'colour_2'
    
    var from_rgb = [];
    var to_rgb = [];
    var step_rgb = []();
    var gradient_colours = []();
    var rgb = []();
    var hex_rgb = [](); 
     
    from_rgb.r = hexdec(colour_1.substr(0, 2)); 
    from_rgb.g = hexdec(colour_1.substr(2, 2));
    from_rgb.b = hexdec(colour_1.substr(4, 2)); 
     
    to_rgb.r = hexdec(colour_2.substr(0, 2));
    to_rgb.g = hexdec(colour_2.substr(2, 2)); 
    to_rgb.b = hexdec(colour_2.substr(4, 2)); 
     
    step_rgb.r = (from_rgb.r - to_rgb.r) / (increments); 
    step_rgb.g = (from_rgb.g - to_rgb.g) / (increments); 
    step_rgb.b = (from_rgb.b - to_rgb.b) / (increments); 
    

    for(var i = 0; i <= increments; i++) { 
        rgb.r = Math.floor(from_rgb.r - (step_rgb.r * i)); 
        rgb.g = Math.floor(from_rgb.g - (step_rgb.g * i)); 
        rgb.b = Math.floor(from_rgb.b - (step_rgb.b * i)); 
        
        hex_rgb.r = convert_to_hex(rgb.r); 
        hex_rgb.g = convert_to_hex(rgb.g); 
        hex_rgb.b = convert_to_hex(rgb.b);
        
        var hex_string = "";
        
        for (var hex in hex_rgb) {
						if (hex_string.hasOwnProperty(hex)) {
							hex_string += hex_rgb[hex];           
						}
        }
                
        gradient_colours.push(hex_string); 
    } 
     
    return gradient_colours; 
}
