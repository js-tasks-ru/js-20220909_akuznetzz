export default class ColumnChart {
    emptyData = {
        data: [],
        label: '',
        link: '',
        value: 0
      }
    
    constructor (dataObj) {
        if (dataObj === undefined) {this.dataObj = this.emptyData
        } else {
        this.dataObj = dataObj
        }
        this.chartHeight = 50
        
        this.render()

    }

    getTemplate() {
        this.template = document.createElement('DIV')
        this.template.classList.add('column-chart')
        this.template.style = `--chart-height: ${this.chartHeight}`

        this.title = document.createElement('DIV')
        this.title.classList.add('column-chart__title')
        this.title.innerHTML = `Total ${this.dataObj.label}`


        if (this.dataObj.link) {
            this.link = document.createElement('A')
            this.link.classList.add('column-chart__link')
            this.link.href = `${this.dataObj.link}`
            this.link.innerHTML = "View all"

            this.title.append(this.link)
        }


        this.container = document.createElement('DIV')
        this.container.classList.add('column-chart__container')

        this.containerHeader = document.createElement('DIV')
        this.containerHeader.dataset.element = "header"
        this.containerHeader.classList.add('column-chart__header')
        
        if (this.dataObj.formatHeading) {
            this.containerHeader.innerHTML = this.dataObj.formatHeading((this.dataObj.value))
        } else {
            this.containerHeader.innerHTML = `${this.dataObj.value}`
        }
        

        this.containerBody = document.createElement('DIV')
        this.containerBody.dataset.element = "body"
        this.containerBody.classList.add('column-chart__chart')
        
        if (this.dataObj.data) {
        if (this.dataObj.data.length === 0) {
            this.template.classList.add('column-chart_loading')
        } else {
            this.containerBody.innerHTML = this.createColumn(this.dataObj.data)
        }
        } else if (this.dataObj.data === undefined) {this.template.classList.add('column-chart_loading')}

        this.container.append(this.containerHeader)
        this.container.append(this.containerBody)

        this.template.append(this.title)
        this.template.append(this.container)

        return this.template

    }

    render() {
        this.element = this.getTemplate()

        return this.element
    }

    update(data) {
        
        this.containerBody.innerHTML = this.createColumn(data)
    }
 
    remove () {
        this.element.remove()
    }

    destroy() {

    }

    createColumn(data) {
        const maxValue = Math.max(...data);
        const scale = 50 / maxValue;
        
        let inner = ''

        for (let elem of data) {

            inner += `
                <div style="--value: ${Math.floor(elem * scale)}" data-tooltip="${(elem / maxValue * 100).toFixed(0)}%"></div> 
            `
        }

        return inner
    }
}
