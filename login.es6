/**
 * Created by phuc.ngo on 9/12/2016.
 */
let login = (username,password) => {
    if(username!=='admin' || password !== 'admin'){
        console.log('incorrect login');
    }
};

login('admin','password');