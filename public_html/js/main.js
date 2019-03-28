// main.js

function extract_json_config(txt) {
    var myRegexp = /<script type="text\/javascript">window._sharedData = (.*);<\/script>/gm;
    var match = myRegexp.exec(txt);
    json_out = JSON.parse(match[1]);
    console.log(json_out);
    return json_out;
}

function print_text(txt) {
    var
        body = document.getElementsByTagName('body')[0],
        // pretxt = document.createElement("pre"),
        img_container = document.createElement("div");

    img_container.id='img_container';
    body.appendChild(img_container);

    var json_config = extract_json_config(txt);
    // var myWindow = window.open("", "json_config", "width=500,height=500");
    // myWindow.document.write('<pre>'+JSON.stringify(json_out)+'</pre>');
    // pretxt.innerText=txt;
    // body.appendChild(pretxt);

    // console.log(json_config.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0]);
    // console.log(json_config.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url);
    // console.log(json_config.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0].node.shortcode);


    var
        i = 0,
        posts_portada = json_config.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
    while (i < posts_portada.length) {
        var
            img_element = document.createElement("img"),
            img_link = document.createElement("a"),
            img_url = posts_portada[i].node.display_url,
            post_code = posts_portada[i].node.shortcode;

        img_element.id='img_element_'+i;
        img_element.className='img_element';
        img_element.src=img_url;
        img_element.alt='https://www.instagram.com/p/'+post_code+'/';

        img_link.id='img_link_'+i;
        img_link.href='https://www.instagram.com/p/'+post_code+'/';

        img_link.appendChild(img_element);
        img_container.appendChild(img_link);

        console.log(img_url);
        console.log(img_url);

        i++;
    }
}

function ajax (url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true); // true = asynchronous
    req.onload = function () {
        var value = this.responseText;
        callback(value);
    };
    req.send(null);
}

function main() {
    console.log('heyy');
    ajax('https://www.instagram.com/belategui_regueiro/',print_text)
}
