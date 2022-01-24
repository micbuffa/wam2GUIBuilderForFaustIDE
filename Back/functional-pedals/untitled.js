
/*
Code generated with Faust version 2.15.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONuntitled() {
	return '{"name": "untitled","filename": "untitled","version": "2.15.10","compile_options": "-scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/analyzers.lib","/usr/local/share/faust/filters.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/9C59E34BE2AA2775F4189F5149A2EB36DFC53AC4/web/wap"],"size": "16528","inputs": "2","outputs": "2","meta": [ { "analyzers.lib/name": "Faust Analyzer Library" },{ "analyzers.lib/version": "0.0" },{ "author": "Oli Larkin (contact@olilarkin.co.uk)" },{ "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "copyright": "Oliver Larkin" },{ "description": "Envelope Follower controlling pitch of a triangle oscillator, good with percussive input" },{ "filename": "untitled" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/version": "0.0" },{ "licence": "GPL" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "untitled" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.0" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" },{ "version": "0.2" }],"ui": [ {"type": "vgroup","label": "untitled","items": [ {"type": "hslider","label": "BasePitch","address": "/untitled/BasePitch","index": "80","meta": [{ "OWL": "PARAMETER_A" },{ "unit": "semitones" }],"init": "60","min": "24","max": "96","step": "0.1"},{"type": "hslider","label": "Mix","address": "/untitled/Mix","index": "20","meta": [{ "OWL": "PARAMETER_D" }],"init": "0.5","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "PitchMod","address": "/untitled/PitchMod","index": "92","meta": [{ "OWL": "PARAMETER_B" },{ "unit": "semitones" }],"init": "24","min": "-64","max": "64","step": "1"},{"type": "hslider","label": "Release","address": "/untitled/Release","index": "48","meta": [{ "OWL": "PARAMETER_C" },{ "unit": "ms" }],"init": "20","min": "2","max": "100","step": "1"},{"type": "checkbox","label": "bypass","address": "/untitled/bypass","index": "40"}]}]}';
}
function getBase64Codeuntitled() { return "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LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9hbmFseXplcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvOUM1OUUzNEJFMkFBMjc3NUY0MTg5RjUxNDlBMkVCMzZERkM1M0FDNC93ZWIvd2FwIl0sInNpemUiOiAiMTY1MjgiLCJpbnB1dHMiOiAiMiIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImFuYWx5emVycy5saWIvbmFtZSI6ICJGYXVzdCBBbmFseXplciBMaWJyYXJ5IiB9LHsgImFuYWx5emVycy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiYXV0aG9yIjogIk9saSBMYXJraW4gKGNvbnRhY3RAb2xpbGFya2luLmNvLnVrKSIgfSx7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiY29weXJpZ2h0IjogIk9saXZlciBMYXJraW4iIH0seyAiZGVzY3JpcHRpb24iOiAiRW52ZWxvcGUgRm9sbG93ZXIgY29udHJvbGxpbmcgcGl0Y2ggb2YgYSB0cmlhbmdsZSBvc2NpbGxhdG9yLCBnb29kIHdpdGggcGVyY3Vzc2l2ZSBpbnB1dCIgfSx7ICJmaWxlbmFtZSI6ICJ1bnRpdGxlZCIgfSx7ICJmaWx0ZXJzLmxpYi9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJsaWNlbmNlIjogIkdQTCIgfSx7ICJtYXRocy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRocy5saWIvbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHMubGliL3ZlcnNpb24iOiAiMi4xIiB9LHsgIm5hbWUiOiAidW50aXRsZWQiIH0seyAib3NjaWxsYXRvcnMubGliL25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAidmVyc2lvbiI6ICIwLjIiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogInVudGl0bGVkIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiQmFzZVBpdGNoIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvQmFzZVBpdGNoIiwiaW5kZXgiOiAiODAiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQSIgfSx7ICJ1bml0IjogInNlbWl0b25lcyIgfV0sImluaXQiOiAiNjAiLCJtaW4iOiAiMjQiLCJtYXgiOiAiOTYiLCJzdGVwIjogIjAuMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiTWl4IiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvTWl4IiwiaW5kZXgiOiAiMjAiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfRCIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiUGl0Y2hNb2QiLCJhZGRyZXNzIjogIi91bnRpdGxlZC9QaXRjaE1vZCIsImluZGV4IjogIjkyIiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0IiIH0seyAidW5pdCI6ICJzZW1pdG9uZXMiIH1dLCJpbml0IjogIjI0IiwibWluIjogIi02NCIsIm1heCI6ICI2NCIsInN0ZXAiOiAiMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiUmVsZWFzZSIsImFkZHJlc3MiOiAiL3VudGl0bGVkL1JlbGVhc2UiLCJpbmRleCI6ICI0OCIsIm1ldGEiOiBbeyAiT1dMIjogIlBBUkFNRVRFUl9DIiB9LHsgInVuaXQiOiAibXMiIH1dLCJpbml0IjogIjIwIiwibWluIjogIjIiLCJtYXgiOiAiMTAwIiwic3RlcCI6ICIxIn0seyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiYnlwYXNzIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvYnlwYXNzIiwiaW5kZXgiOiAiNDAifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class untitledNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {

        var json_object = JSON.parse(getJSONuntitled());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'untitled', options);
        this.baseURL = baseURL;
      
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

        this.json_object = json_object;

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
        return getJSONuntitled();
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
                this.setParamValue(path, untitledNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
window.untitled = class untitled {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	// Resume audio context each time...
    	context.resume();
    	
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        
        this.pathTable = [];
        
        // soundfile items
        this.soundfile_items = [];
    }
    
    // JSON parsing functions
    parse_ui(ui)
    {
        for (var i = 0; i < ui.length; i++) {
            this.parse_group(ui[i]);
        }
    }
    
    parse_group(group)
    {
        if (group.items) {
            this.parse_items(group.items);
        }
    }
    
    parse_items(items)
    {
        for (var i = 0; i < items.length; i++) {
            this.parse_item(items[i]);
        }
    }
    
    parse_item(item)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            this.parse_items(item.items);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            this.soundfile_items.push(item.address);
            this.pathTable[item.address] = parseInt(item.index);
        }
    }
  
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    load()
    {
    	return new Promise((resolve, reject) => {   
            let real_url = (this.baseURL === "") ? "untitled-processor.js" : (this.baseURL + "/untitled-processor.js");
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new untitledNode(this.context, this.baseURL, {});
            this.node.onprocessorerror = () => { console.log('An error from untitled-processor was detected.');}
            return (this.node);
            }).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }
    
    loadGui() 
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
                        var element = createuntitledGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createuntitledGUI(this.node);
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

// WAP factory
window.Faustuntitled = window.untitled;
    

