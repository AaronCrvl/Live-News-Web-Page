class News {
    constructor(Title = 'BaseMainText', BodyText = 'Insert Body Text', Author = 'Unknown', Source = 'Unknown', NewsDate = '0000/00/00 00:00:00', Extras = []) {
        //#region Properties
        let Title = Title
        let BodyText = BodyText
        let Author = Author
        let Source = Source
        let NewsDate = NewsDate
        //#endregion
    
        //#region Getters And Setters
        this.getMainText = () => { return this.Title }
        this.setMainText = (newMainText = '') => { 
            if(newMainText.length > 0)
                this.Title = newMainText
        }
    
        this.getBaseText = () => { return this.BodyText }
        this.setBaseText = (newBodyText = '') => { 
            if(newBodyText.length > 0)
                this.BodyText = newBodyText
        }
    
        this.getAutor = () => { return this.Author }
        this.setAutor = (newAutor = '') => { 
            if(newAutor.length > 0)
                this.Author = newAutor
        }
        //#endregion
    
        //#region Methods
        //#endregion
    }        
}
//module.exports = News;