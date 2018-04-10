import React from 'react';

class Home extends React.PureComponent {

    state = {
        isLoading: true,
        pageData: {}
    };


    componentDidMount() {
        // making call to umbraco Rest api 
        
    };

    componentWillUnmount() {
        // keep track if component has been unmounted
        this.isMounted = false;
    }

    render() {
        return (
            <div id="main-container">
                <div id="main" class="wrapper clearfix">
                    
                    <article>
                        <section>
                            <h2>ArticleTitle 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl magna, tristique sollicitudin nibh sed, sodales pulvinar odio. 
                                Morbi rhoncus aliquam tellus, vitae faucibus nulla scelerisque sed. Mauris quis porta risus. 
                                Curabitur elementum placerat mi, quis feugiat ipsum rutrum sed. Vivamus ultricies dolor ac elementum pharetra.
                                Sed pellentesque arcu vitae sem dapibus bibendum. Curabitur tincidunt hendrerit est, et iaculis magna feugiat vel.
                                Vestibulum luctus metus in diam dictum tempus. Nunc facilisis erat et sem venenatis, id rutrum eros porta. 
                                Vivamus a condimentum urna. Duis nec lorem et lorem vehicula imperdiet. 
                                Quisque ac mauris ac leo egestas hendrerit et et leo. 
                                Proin convallis tempus dictum. Fusce lorem libero, blandit vitae placerat id, viverra non ex.
                            </p>
                        </section>
                        <section>
                            <h2>ArticleTitle 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl magna, tristique sollicitudin nibh sed, sodales pulvinar odio. 
                                Morbi rhoncus aliquam tellus, vitae faucibus nulla scelerisque sed. Mauris quis porta risus. 
                                Curabitur elementum placerat mi, quis feugiat ipsum rutrum sed. Vivamus ultricies dolor ac elementum pharetra.
                                Sed pellentesque arcu vitae sem dapibus bibendum. Curabitur tincidunt hendrerit est, et iaculis magna feugiat vel.
                                Vestibulum luctus metus in diam dictum tempus. Nunc facilisis erat et sem venenatis, id rutrum eros porta. 
                                Vivamus a condimentum urna. Duis nec lorem et lorem vehicula imperdiet. 
                                Quisque ac mauris ac leo egestas hendrerit et et leo. 
                                Proin convallis tempus dictum. Fusce lorem libero, blandit vitae placerat id, viverra non ex.
                            </p>
                        </section>
                    </article>
    
                    
                    <aside>
                        <h3>Aside Title</h3>
                        <p>Aside Title Text</p>
                    </aside>
                    
                </div>
            </div>
        );
    }
};

export default Home;