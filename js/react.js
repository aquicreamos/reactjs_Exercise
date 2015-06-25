React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );

React.render(
  React.createElement('h2', null, 'Aquicreamos'),
  document.getElementById('segundo')
);

var Componente = React.createClass({
	render: function(){
		return (<p>Nuevo Contenido incluido en un componente</p>);
	}
});
  var Componente = React.createClass({
          render:function(){
            return (<h1>T&iacute;tulo</h1>);
          }
     });
     var Componente2 = React.createClass({
          render:function(){
            return (<div>Segundo Componente</div>);
          }
    });
     var Componente3 = React.createClass({
        render:function(){
          return React.DOM.div({children:[React.DOM.span({children:"Ejemplo 3"}),React.DOM.span({children:"El mismo ejemplo 3"})]})
        }

     });
    var Componente4= React.createClass({
      render:function(){
        return React.DOM.div({
            children:"Este es el ejemplo 4"

        })


      }

    })
  React.render(<Componente/>,document.getElementById('ejemplo'));
  React.render(<Componente2/>,document.getElementById('ejemplo2'));
  React.render(Componente3({}),document.getElementById('ejemplo3'));
  React.render(Componente4({}),document.getElementById('ejemplo4'));