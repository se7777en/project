const dragArea = document.querySelector('.slides');
          new Sortable(dragArea, {
            animation: 150,
            onEnd: function(evt) {
                // Callback after sorting
                console.log('Slide moved from index', evt.oldIndex, 'to', evt.newIndex);
            },
            swapThreshold: 1,
            direction: 'vertical'
          });
