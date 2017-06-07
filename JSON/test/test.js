/*import chai from 'chai';
import sinon from 'sinon';
import myapi from '../ajax/ajax2.js';

'use strict';

let expect = chai.expect;

describe('MyAPI', function() {
    let xhr;
    let requests;
    beforeEach(function() {
        xhr = sinon.useFakeXMLHttpRequest();
        global.XMLHttpRequest = xhr;
        requests = [];
        xhr.onCreate = function(xhr) {
            requests.push(xhr);
        };
    });

    afterEach(function() {
        xhr.restore();
    });


    it('should parse fetched data as JSON', function(done) {
        let data = { foo: 'bar' };
        let dataJson = JSON.stringify(data);
        myapi.get(function(err, result) {
            expect(result).to.deep.equal(data); done();
        });
        requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });
}); */
