
/*
Code generated with Faust version 2.17.12
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONtoto() {
	return '{"name": "Blipper","filename": "toto.dsp","version": "2.17.12","compile_options": "-lang wasm-ib -scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/analyzers.lib","/usr/local/share/faust/filters.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/6244E251437BE860C00D085D00DFD06889A02EDF/web/wap"],"size": "16528","inputs": "2","outputs": "2","meta": [ { "analyzers.lib/name": "Faust Analyzer Library" },{ "analyzers.lib/version": "0.0" },{ "author": "Oli Larkin (contact@olilarkin.co.uk)" },{ "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "copyright": "Oliver Larkin" },{ "description": "Envelope Follower controlling pitch of a triangle oscillator, good with percussive input" },{ "filename": "toto.dsp" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/version": "0.0" },{ "licence": "GPL" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "Blipper" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.0" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" },{ "version": "0.2" }],"ui": [ {"type": "vgroup","label": "Blipper","items": [ {"type": "hslider","label": "BasePitch","address": "/Blipper/BasePitch","index": "84","meta": [{ "OWL": "PARAMETER_A" },{ "unit": "semitones" }],"init": "60","min": "24","max": "96","step": "0.1"},{"type": "hslider","label": "Mix","address": "/Blipper/Mix","index": "20","meta": [{ "OWL": "PARAMETER_D" }],"init": "0.5","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "PitchMod","address": "/Blipper/PitchMod","index": "96","meta": [{ "OWL": "PARAMETER_B" },{ "unit": "semitones" }],"init": "24","min": "-64","max": "64","step": "1"},{"type": "hslider","label": "Release","address": "/Blipper/Release","index": "48","meta": [{ "OWL": "PARAMETER_C" },{ "unit": "ms" }],"init": "20","min": "2","max": "100","step": "1"},{"type": "checkbox","label": "bypass","address": "/Blipper/bypass","index": "40"}]}]}';
}
function getBase64Codetoto() { return "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YXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYW5hbHl6ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvdG1wL3Nlc3Npb25zLzYyNDRFMjUxNDM3QkU4NjBDMDBEMDg1RDAwREZEMDY4ODlBMDJFREYvd2ViL3dhcCJdLCJzaXplIjogIjE2NTI4IiwiaW5wdXRzIjogIjIiLCJvdXRwdXRzIjogIjIiLCJtZXRhIjogWyB7ICJhbmFseXplcnMubGliL25hbWUiOiAiRmF1c3QgQW5hbHl6ZXIgTGlicmFyeSIgfSx7ICJhbmFseXplcnMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImF1dGhvciI6ICJPbGkgTGFya2luIChjb250YWN0QG9saWxhcmtpbi5jby51aykiIH0seyAiYmFzaWNzLmxpYi9uYW1lIjogIkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSIgfSx7ICJiYXNpY3MubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImNvcHlyaWdodCI6ICJPbGl2ZXIgTGFya2luIiB9LHsgImRlc2NyaXB0aW9uIjogIkVudmVsb3BlIEZvbGxvd2VyIGNvbnRyb2xsaW5nIHBpdGNoIG9mIGEgdHJpYW5nbGUgb3NjaWxsYXRvciwgZ29vZCB3aXRoIHBlcmN1c3NpdmUgaW5wdXQiIH0seyAiZmlsZW5hbWUiOiAidG90by5kc3AiIH0seyAiZmlsdGVycy5saWIvbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVycy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAibGljZW5jZSI6ICJHUEwiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuMSIgfSx7ICJuYW1lIjogIkJsaXBwZXIiIH0seyAib3NjaWxsYXRvcnMubGliL25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAidmVyc2lvbiI6ICIwLjIiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIkJsaXBwZXIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJCYXNlUGl0Y2giLCJhZGRyZXNzIjogIi9CbGlwcGVyL0Jhc2VQaXRjaCIsImluZGV4IjogIjg0IiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0EiIH0seyAidW5pdCI6ICJzZW1pdG9uZXMiIH1dLCJpbml0IjogIjYwIiwibWluIjogIjI0IiwibWF4IjogIjk2Iiwic3RlcCI6ICIwLjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIk1peCIsImFkZHJlc3MiOiAiL0JsaXBwZXIvTWl4IiwiaW5kZXgiOiAiMjAiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfRCIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiUGl0Y2hNb2QiLCJhZGRyZXNzIjogIi9CbGlwcGVyL1BpdGNoTW9kIiwiaW5kZXgiOiAiOTYiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQiIgfSx7ICJ1bml0IjogInNlbWl0b25lcyIgfV0sImluaXQiOiAiMjQiLCJtaW4iOiAiLTY0IiwibWF4IjogIjY0Iiwic3RlcCI6ICIxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJSZWxlYXNlIiwiYWRkcmVzcyI6ICIvQmxpcHBlci9SZWxlYXNlIiwiaW5kZXgiOiAiNDgiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQyIgfSx7ICJ1bml0IjogIm1zIiB9XSwiaW5pdCI6ICIyMCIsIm1pbiI6ICIyIiwibWF4IjogIjEwMCIsInN0ZXAiOiAiMSJ9LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogImJ5cGFzcyIsImFkZHJlc3MiOiAiL0JsaXBwZXIvYnlwYXNzIiwiaW5kZXgiOiAiNDAifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class totoNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'toto', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push(item.address);
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, totoNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel/12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
    // Loads a sample and decode it
    static loadAudioSample(context, url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 return response.arrayBuffer();
                                 })
                           .then((buffer) => {
                                 context.decodeAudioData(buffer, (decodedAudioData) => {
                                                         resolve(decodedAudioData);
                                                         });
                                 });
                           });
    }
    
    
    
    // Loads a sample
    static loadSample(url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 resolve (response.arrayBuffer());
                                 })
                           });
    }
    
}

// Factory class
class toto {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        
        this.pathTable = [];
        
        // soundfile items
        this.soundfile_items = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                        
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            const dspFile = await fetch("toto.wasm");
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                               
                //let real_url = (this.baseURL === "") ? "toto-processor.js" : (this.baseURL + "/toto-processor.js");
                
                let re = /JSON_STR/g;
                let totoProcessorString1 = totoProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([totoProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new totoNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from toto-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createtotoGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createtotoGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}

}

// Template string for AudioWorkletProcessor

let totoProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class totoProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                totoProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                totoProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                totoProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                totoProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "soundfile") {
                // Keep soundfile adresses
                obj.soundfile_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            totoProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, totoProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.toto_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.toto_instance.exports;
            this.HEAP = this.toto_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
            
            // soundfile items
            this.soundfile_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
            {
                /*
                 Soundfile layout:
                
                    FAUSTFLOAT** fBuffers;
                    int fLength;
                    int fSampleRate;
                    int fChannels;
                 
                    ===========
                    Soundfile struct
                    fBuffers[channels]
                    fBuffers0
                    fBuffers1
                    ...
                    Soundfile struct
                    fBuffers[channels]
                    fBuffers0
                    fBuffers1
                    ...
                    ===========
                */
                
                var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
                
                //console.log("sound_ptr " + sound_ptr);
                //console.log("size_of_soundfile " + size_of_soundfile);
                
                // end of sounfile
                var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
                
                this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
                this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
                this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
                this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
                
                //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
                
                // Setup soundfile pointers
                var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
                
                for (var i = 0; i < channels; i++) {
                    this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                }
                
                // Setup soundfile buffer
                for (var i = 0; i < channels; i++) {
                    
                    // start of sound buffer
                    var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                    
                    // generate a 440 Hz signal
                    for (var j = 0; j < length; j++) {
                        this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                    }
                }
                
                // Setup fSoundfile fields in the DSP structure
                //console.log("sound_index " + sound_index);
                //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
                
                this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
                
                /*
                console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
                console.log("length " + length);
                console.log("channels " + channels);
                console.log("this.sample_size " + this.sample_size);
                console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
                */
                
                // End of buffer data;
                return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                totoProcessor.parse_ui(this.json_object.ui, this, totoProcessor.parse_item2);
                
                /*
                console.log("soundfile_items.length " + this.soundfile_items.length);
                
                // Setup soundfile offset (after audio data)
                this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * NUM_FRAMES * this.sample_size);
                
                var sound_ptr1 = this.soundfile_ptr;
                var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
                var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
                */
                 
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path]] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path]];
            }

            // Init resulting DSP
            this.initAux();
            
            console.log(this);
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            var params = Object.entries(parameters);
            for (var i = 0; i < params.length; i++) {
                this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
            }
            
            // Compute
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return true;
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    registerProcessor('toto', totoProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.toto = toto;
    window.Fausttoto = toto;
} else {
    module.exports = { toto };
}
