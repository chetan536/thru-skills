const data = require('../mydata').data;

module.exports.index = function(req,res) {
    // console.log(req.session);
    res.render('index',{
        title: 'My Portfolio - Ashutosh Mishra',
        navHome: true
    })
}

module.exports.projectList = (req,res) => {

    // console.log(data.myProjects);

    res.render('projectList', {
        title: 'Projects',
        projects: data.myProjects,
        navProject: true
    })
}


module.exports.blogList = (req,res) => {

    let random = parseInt(Math.random()*data.myBlog.length)
    console.log(random)
    res.render('blog', {
        title: 'Blog List',
        navBlog: true,
        blogs: data.myBlog,
        blogCategory: data.blogCategories,
        featuredBlog: data.myBlog[random]
    })
}

module.exports.projectDetail = (req,res) => {

    let alias = req.params.alias;
    // req.body.email

    let project = data.myProjects.filter(ele => ele.alias == alias)[0]

    // console.log(project)
    // data.myProjects

    console.log('my alias',alias);

    res.render('projectDetail', {
        title: project.name,
        project: project
    })
}

module.exports.contact = (req,res) => {
    res.render('contact', {
        title: 'Contact Us',
        navContact: true
    })
}

module.exports.doContact = (req,res) => {
    let body = req.body;
    console.log(body);

    res.status(201).json({
        message: 'Thanks for Contacting US'
    });
}

module.exports.signin = (req,res) => {
    res.render('signin', {
        title: 'Sign In',
        layout:'layout-signin'
    })
}

module.exports.signup = (req,res) => {
    res.render('signup', {
        title: 'Sign Up',
        layout:'layout-signin'
    })
}

module.exports.doSignup = (req,res) => {
    let body = req.body;
    console.log(body);
    res.redirect('/signin');
}


module.exports.admin = (req,res) => {
    res.render('admin/admin', {
        title:'Admin',
        layout:'admin-layout'
    })
}

const users = [
    {
        name:'Test User',
        email:"test@test.com",
        password:'test1234'
    },
    {
        name:'User',
        email:"testuser@test.com",
        password:'test123456'
    }
]



module.exports.doSignin = (req,res) => {
    let body = req.body;
    console.log(body);
    
    let user = users.filter((ele) => body.email == ele.email)

    console.log(user);

    if(user.length > 0) {
        if(user[0].password == body.password) {

            req.session.isLoggedIn = true;
            req.session.user = user[0];
            res.redirect('/admin');
        }else {
           res.render('signin', {
               title:'Signin',
               layout:'layout-signin',
               error: true,
               message: 'Email/Password Incorrect'
           })
        }
    }else {
        // user not found
        res.render('signin', {
            title:'Signin',
            layout:'layout-signin',
            error:true,
            message: 'Email/Password Incorrect'
        })
    }
}

module.exports.blogDetail = (req,res) => {
    let alias = req.params.alias;
    let blog = data.myBlog.filter(ele => ele.alias == alias)[0];


    res.render('blogDetail', {
        title: blog.name,
        blog: blog
    })
}

module.exports.adminProjectList = (req,res) => {
    res.render('admin/projects', {
        title: 'Project List',
        layout:'admin-layout',
        projects: data.myProjects
    })
}

module.exports.adminProjectDetail = (req,res) => {

    let alias = req.params.alias;

    // console.log(alias);
    let project = data.myProjects.filter(ele => ele.alias == alias)[0]

    res.render('admin/projectDetail', {
        title: 'Project Detail',
        layout:'admin-layout',
        project: project
    })
}

module.exports.signout = (req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = {};
    res.redirect('/');
}